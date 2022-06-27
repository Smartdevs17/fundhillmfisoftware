import { Fragment} from "react";
import { LoadScripts } from "../Hooks";

// ROUTER
import Router from "../Router";

const App = () => {



  // SCRIPTS
  // LoadScripts("/asset/js/jquery.min.js");
  // LoadScripts("/assets/js/vendor.min.js");
  
  // LoadScripts("/assets/libs/sweetalert2/sweetalert2.min.js");
  // LoadScripts("/assets/js/pages/sweet-alerts.init.js");

  // LoadScripts("/assets/libs/morris-js/morris.min.js");
  // LoadScripts("/assets/libs/raphael/raphael.min.js");
  // LoadScripts("/assets/js/pages/dashboard.init.js");
  // LoadScripts("/assets/libs/custombox/custombox.min.js");

  LoadScripts("/assets/libs/datatables/jquery.dataTables.min.js");
  LoadScripts("/assets/libs/datatables/dataTables.bootstrap4.min.js");
  LoadScripts("/assets/libs/datatables/dataTables.responsive.min.js");
  LoadScripts("/assets/libs/datatables/responsive.bootstrap4.min.js");
  LoadScripts("/assets/libs/datatables/dataTables.buttons.min.js");
  LoadScripts("/assets/libs/datatables/buttons.bootstrap4.min.js");
  LoadScripts("/assets/libs/jszip/jszip.min.js");
  LoadScripts("/assets/libs/pdfmake/pdfmake.min.js");
  LoadScripts("/assets/libs/pdfmake/vfs_fonts.js");
  LoadScripts("/assets/libs/datatables/buttons.html5.min.js");
  LoadScripts("/assets/libs/datatables/buttons.print.min.js");
  LoadScripts("/assets/libs/datatables/dataTables.keyTable.min.js");
  LoadScripts("/assets/libs/datatables/dataTables.select.min.js");
  LoadScripts("/assets/js/pages/datatables.init.js");
  LoadScripts("/assets/js/app.min.js");




  LoadScripts("/asset/js/popper.min.js");
  LoadScripts("/asset/js/bootstrap.bundle.min.js");
  LoadScripts("/asset/js/plugin.js");
  LoadScripts("/asset/js/jquery.mCustomScrollbar.concat.min.js");
  LoadScripts("/asset/js/custom.js");
  LoadScripts("/asset/js/scripts.js");

  return (
    <Fragment>
      <Router />
    </Fragment>
  );
}

export default App;