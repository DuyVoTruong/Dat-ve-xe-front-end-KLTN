function Test(){
    return(
        <>
        <div id="booking" class="section">
            <div class="section-center">
              <div class="container">
                <div class="row">
                  <div class="booking-form">
                    <form>
                      <div class="row">
                        <div class="col-md-9">
                          <div class="form-group">
                            <span class="form-label">Điểm đi</span>
                            <input class="form-control" type="text" placeholder="Chọn điểm đi" list="DiemDi"/>
                            
                          </div>
                        </div>
                        <div class="col-md-9">
                          <div class="form-group">
                            <span class="form-label">Điểm đến</span>
                            <input class="form-control" type="text" placeholder="Chọn điểm đến" list="DiemDen"/>
                            
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Ngày đi</span>
                            <input class="form-control" type="date" required/>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-btn">
                          <button class="submit-btn"><i class="text-white px-2 fa fa-search">TÌM KIẾM</i></button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Test;