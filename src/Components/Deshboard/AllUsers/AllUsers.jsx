import Swal from "sweetalert2";
import useUsers from "../../CustomHooks/useUsers";
import DeshboardBAnner from "../../SheaireComponent/DeshboardBAnner";
import { MdAutoDelete, MdDelete } from "react-icons/md";

export default function AllUsers() {
  const { users } = useUsers();

  const handleDeleteuser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleBlockuser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You yoou can solve this any time!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff9d4e",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, block it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Blocked!",
          text: "Your file has been blocked.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="w-full !scrollNone overflow-y-auto  max-h-[calc(100vh-50px)] p-4">
      <DeshboardBAnner></DeshboardBAnner>
      <div className="w-full mt-5 overflow-auto">
        <div className="min-w-[1000px] flex flex-col gap-2">
          <div className="w-full grid grid-cols-5 border border-[#cfb46b3b] rounded bg-gradient-bg">
            <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
              {" "}
              <p className="text-gradient">Name</p>
            </div>
            <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
              {" "}
              <p className="text-gradient">Email</p>
            </div>
            <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
              {" "}
              <p className="text-gradient">Number</p>
            </div>
            <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
              {" "}
              <p className="text-gradient">Status</p>
            </div>
            <div className="w-full p-3 flex justify-center items-center bg-none ">
              {" "}
              <p className="text-gradient">Action</p>
            </div>
          </div>
          {users.map((item, idx) => (
            <div
              key={idx}
              className="w-full grid grid-cols-5 border border-[#ffd04e3b] rounded bg-gradient-bg"
            >
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                {" "}
                <p className="text-gradient">{item.fullname}</p>
              </div>
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                {" "}
                <p className="text-gradient">{item.email}</p>
              </div>
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                {" "}
                <p className="text-gradient">{item.number}</p>
              </div>
              <div className="w-full border-r border-[#cfb46b3b] p-3 flex justify-center items-center bg-none ">
                {" "}
                <p className="text-gradient">{item.status}</p>
              </div>
              <div className="w-full grid grid-cols-2 bg-none ">
                <div className="w-full flex border-r border-[#cfb46b3b] justify-center items-center bg-none">
                  <MdAutoDelete
                    onClick={handleBlockuser}
                    className="text-[#ca8f37] text-xl cursor-pointer"
                  />
                </div>
                <div className="w-full flex justify-center items-center bg-none">
                  <MdDelete
                    onClick={handleDeleteuser}
                    className="text-[#fd19199c] text-2xl cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
