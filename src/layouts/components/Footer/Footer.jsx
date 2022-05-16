import { Fragment } from 'react'
import { NavLink} from "react-router-dom";
import {Helmet} from "react-helmet";


function Footer() {
  return (
        <Fragment>
             
            {/* <div className="content-page"> */}
            

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                2022 &copy; FundHill Developed by <NavLink to="/">Smart Developers</NavLink>
                            </div>
                        </div>
                    </div>
                </footer>
             

            {/* </div> */}
            <Helmet >
            <script src="/assets/js/vendor.min.js" type="text/javascript"></script>
            <script src="/assets/libs/rwd-table/rwd-table.min.js" type="text/javascript"></script>

            <script src="/assets/libs/sweetalert2/sweetalert2.min.js" type="text/javascript"></script>
            <script src="/assets/js/pages/sweet-alerts.init.js" type="text/javascript"></script>
            <script src="/assets/libs/morris-js/morris.min.js" type="text/javascript"></script>
            <script src="/assets/libs/raphael/raphael.min.js" type="text/javascript"></script>
            <script src="/assets/js/pages/dashboard.init.js" type="text/javascript"></script>
            <script src="/assets/libs/custombox/custombox.min.js" type="text/javascript"></script>

            {/* <script src="/assets/libs/datatables/jquery.dataTables.min.js" type="text/javascript"></script>
            <script src="/assets/libs/datatables/dataTables.bootstrap4.min.js" type="text/javascript"></script>
            <script src="/assets/libs/datatables/dataTables.responsive.min.js" type="text/javascript"></script>
            <script src="/assets/libs/datatables/responsive.bootstrap4.min.js" type="text/javascript"></script>
            <script src="/assets/libs/datatables/dataTables.buttons.min.js" type="text/javascript"></script>
            <script src="/assets/libs/datatables/buttons.bootstrap4.min.js" type="text/javascript"></script>
            <script src="/assets/libs/jszip/jszip.min.js" type="text/javascript"></script>
            <script src="/assets/libs/pdfmake/pdfmake.min.js" type="text/javascript"></script>
            <script src="/assets/libs/pdfmake/vfs_fonts.js" type="text/javascript"></script>
            <script src="/assets/libs/datatables/buttons.html5.min.js" type="text/javascript"></script>
            <script src="/assets/libs/datatables/buttons.print.min.js" type="text/javascript"></script>
            <script src="/assets/libs/datatables/dataTables.keyTable.min.js" type="text/javascript"></script>
            <script src="/assets/libs/datatables/dataTables.select.min.js" type="text/javascript"></script>
            <script src="/assets/js/pages/datatables.init.js" type="text/javascript"></script> */}

            <script src="/assets/js/app.min.js" type="text/javascript"></script>


            <script src="/asset/js/popper.min.js" type="text/javascript"></script>
            <script src="/asset/js/bootstrap.bundle.min.js" type="text/javascript"></script>
            <script src="/asset/js/plugin.js" type="text/javascript"></script>
            <script src="/asset/js/jquery.mCustomScrollbar.concat.min.js" type="text/javascript"></script>
            <script src="/asset/js/custom.js" type="text/javascript"></script>
            <script src="/asset/js/scripts.js" type="text/javascript"></script>


            </Helmet>

        </Fragment>
    )
}

export default Footer