import { useEffect, useState } from "react";
import radarsArray from "../../radarsArray";

const Main = () => {
  const [radars, setRadars] = useState([]);
  const [driverInfo, setDriverInfo] = useState({});
  useEffect(() => {
    setRadars(radarsArray);
  }, []);
  const deleteCar = (id) => {
    console.log("id", id);
    const newRadars = radars.filter((item) => item.id !== id);
    setRadars(newRadars);
  };

  const onChangeInput = (e) => {
    setDriverInfo({ [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("e", e);
    console.log("Submit", submitForm);
  };
  return (
    <main className="main">
      <section className="radar-table__section">
        <div className="container">
          <div className="row my-5">
            <div className="col">
              <table className="table table-light table-striped table-hover table-responsive table-border">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Driver's name</th>
                    <th>Car's model</th>
                    <th>Car's number</th>
                    <th>For what?</th>
                    <th>Value</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {radars.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.driverName}</td>
                      <td>{item.carModel}</td>
                      <td>{item.carNumber}</td>
                      <td>{item.forWhat}</td>
                      <td>
                        <span className="badge bg-dark">💲{item.value}</span>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => deleteCar(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="radar-create__section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h2>Create Radar</h2>
                </div>
                <div className="card-body">
                  <form onSubmit={submitForm}>
                    <div className="row">
                      <div className="col-4">
                        <div className="my-2">
                          <label htmlFor="driverName" className="form-label">
                            Driver name
                          </label>
                          <input
                            type="text"
                            id="driverName"
                            name="driverName"
                            className="form-control"
                            placeholder="John Doe"
                            onChange={onChangeInput}
                          />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="my-2">
                          <label htmlFor="carModel" className="form-label">
                            Car's model
                          </label>
                          <input
                            type="text"
                            id="carModel"
                            name="carModel"
                            className="form-control"
                            placeholder="Chevrolet Malibu"
                            onChange={onChangeInput}
                          />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="my-2">
                          <label htmlFor="carNumber" className="form-label">
                            Car's number
                          </label>
                          <input
                            type="text"
                            id="carNumber"
                            name="carNumber"
                            className="form-control"
                            placeholder="01A777AA"
                            onChange={onChangeInput}
                          />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="my-2">
                          <label htmlFor="forWhat" className="form-label">
                            For What
                          </label>
                          <input
                            type="text"
                            id="forWhat"
                            name="forWhat"
                            className="form-control"
                            placeholder="High speed"
                            onChange={onChangeInput}
                          />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="my-2">
                          <label htmlFor="value" className="form-label">
                            Value
                          </label>
                          <input
                            type="text"
                            id="value"
                            name="value"
                            className="form-control"
                            placeholder="$250"
                            onChange={onChangeInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3 my-3">
                        <button className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
