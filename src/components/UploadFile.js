import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const UploadFile =()=>{

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    
    const imageListRef = ref(storage, "images/");
    
    const uploadImage =()=>{
        if(imageUpload == null) return;

        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snaphsot)=>{
            getDownloadURL(snaphsot.ref).then((url)=>{
                setImageList((prev) => [...prev, url]);
            })
            alert("Image uploaded");
            console.log(snaphsot);
        })
    }

    console.log(imageList);

    useEffect(()=>{
        listAll(imageListRef).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev, url]);
                });
            });
        });
    }, []);

    return(
        <>
            <div>
                <input 
                    type="file" 
                    onChange={(event)=>{
                        setImageUpload(event.target.files[0]);
                    }}>
                </input>
                <button onClick={uploadImage}>Upload Image</button>

                {imageList.map((url)=>{
                    return <img src={url}/>
                })}
            </div>
        </>
    );
}

export default UploadFile;