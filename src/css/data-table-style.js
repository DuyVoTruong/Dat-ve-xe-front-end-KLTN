import { defaultThemes } from "react-data-table-component";

export const tableCustomStyles = {
    rows: {
      style: {
        fontSize: "14px",
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: defaultThemes.default.divider.default,
        borderLeftStyle: 'solid',
        borderLeftWidth: '1px',
        borderLeftColor: defaultThemes.default.divider.default,
      },
    },
    headCells: {
        style: {
            fontSize: "16px",
            fontWeight: "bold",
            borderRightStyle: 'solid',
            borderRightWidth: '1px',
            borderTopColor: defaultThemes.default.divider.default,
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            borderRightColor: defaultThemes.default.divider.default,
            borderLeftStyle: 'solid',
            borderLeftWidth: '1px',
            borderLeftColor: defaultThemes.default.divider.default,
        }
    },
    cells: {
        style: {
            borderRightStyle: 'solid',
            borderRightWidth: '1px',
            borderRightColor: defaultThemes.default.divider.default,
        },
    },
  }