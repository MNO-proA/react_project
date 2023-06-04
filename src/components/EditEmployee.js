import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function EditEmployee({ name, role, id, updateEmployee }) {
  const [emp_name, setEmp_name] = useState(name);
  const [emp_role, setEmp_role] = useState(role);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Update
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("hello from EditEmployee");
              updateEmployee(id, emp_name, emp_role);
            }}
            id="editmodal"
            className="w-full max-w-sm"
          >
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-600"
                  id="inline-full-name"
                  type="text"
                  value={emp_name}
                  onChange={(e) => {
                    setEmp_name(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="role"
                >
                  Role
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-600"
                  id="role"
                  type="text"
                  value={emp_role}
                  onChange={(e) => {
                    setEmp_role(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="md:w-2/3"></div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="shadow bg-slate-500 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            form="editmodal"
            className="shadow bg-purple-500 hover:bg-purple-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;