import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import React from "react";

function ProductionsTable(props) {
    const rows = createRows()

    const columns = [
        { field: 'name', headerName: 'Production Name', flex: 1, headerClassName: 'column-header', headerAlign: "center" },
        { field: 'num', headerName: 'Number of Stalls', flex: 1, headerClassName: 'column-header', headerAlign: "center" },
        { field: 'zones', headerName: 'Number of Zones', flex: 1, headerClassName: 'column-header', headerAlign: "center" },
        { field: 'isActive', headerName: 'Is Active', flex: 1, headerClassName: 'column-header', headerAlign: "center" },
        // { field: 'lastModified', headerName: 'Last Updated', width: 150 },
        // { field: 'colour', headerName: 'ZoneItem Colour', width: 150 },
    ];

    function createRows () {
        let rows = []
        props.stallDataManager.productions.forEach((production) => {
            rows.push({
                id: production.id,
                name: production.name,
                num: production.stallCount(),
                zones: production.zoneManager.zones.length,
                isActive: production.isActive
            })
        })
        return rows
    }

    const handleRowClick = (params) => {
        let production = props.stallDataManager.getProductionByID(params.id)
        props.setSelectedProduction(production)
    }

    return (
        <div style={{height: "100%", width: "95%", marginTop: "15px", display: "flex"}}>
            <DataGrid rows={rows}
                      columns={columns}
                      components={{ Toolbar: GridToolbar }}
                      onRowClick={handleRowClick}
                      id={"data-grid"}
                      initialState={{
                          sorting: {
                              sortModel: [{ field: 'name', sort: 'asc' }],
                          },
                          filter: {
                                filterModel: {items: [{ columnField: 'isActive', operatorValue: 'equals', value: 'true' }],},
                          },
                          pagination: {
                              pageSize: 25,
                          },
                      }}
                      sx={{
                          boxShadow: 2,
                          border: 2,
                          height: "calc(100vh - 200px)", // todo: fix spacing
                          width: '100%',
                          borderColor: 'primary.light',
                          '& .MuiDataGrid-cell:hover': {
                              color: 'primary.main',
                          },
                          flexGrow: 1,
                          '& .column-header': {
                              fontWeight: 900,
                              fontSize: 16
                          },
                      }}>
            </DataGrid>
        </div>
    )
}

export default ProductionsTable;