import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="print__section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <button onClick={handlePrint} className="print__button">
                {" "}
                Print{" "}
              </button>
              <div ref={componentRef} className="card p-10">
                <div className="float__start flex gap-9">
                  <h3 className="card-title mb-0 font-bold">Sonia</h3>
                  <h3 className="card-title mb-0">Uduma</h3>
                </div>
                <hr />
                <div className="float__infoss">
                  <ul>
                    <li>
                      {" "}
                      Name : <span> Dr Andrew C S Koh </span>{" "}
                    </li>
                    <li>
                      {" "}
                      Email : <span> Andrew@gmail.com </span>{" "}
                    </li>
                    <li>
                      {" "}
                      Gender : <span> Male </span>{" "}
                    </li>
                    <li>
                      {" "}
                      Date of Birth : <span> 07-24-1982</span>{" "}
                    </li>
                    <li>
                      {" "}
                      Phone No: <span> </span> 9856231456{" "}
                    </li>
                    <li>
                      {" "}
                      Address :{" "}
                      <span>
                        {" "}
                        26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD{" "}
                      </span>{" "}
                    </li>
                    <li>
                      {" "}
                      Website : <span> www.Andrew.com </span>{" "}
                    </li>
                    <li>
                      {" "}
                      Country : <span> United states </span>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
