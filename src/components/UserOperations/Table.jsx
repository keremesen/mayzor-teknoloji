import React, {useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from '../../context/UserContext';

const Table = () => {

  const { users, deleteUser } = useContext(UserContext);

  const handleDelete = id => {
    deleteUser(id);
  };


  return (
    <div className="flex justify-center    h-3/4 bg-white rounded-[10px] w-auto mx-4  my-10" >
   
      <div class="flex overflow-y-scroll  ">
        <table class=" text-sm text-left  border-b border-[#EAEAEA]  ">
          <thead class=" font-bold bg-white  text-center border-b border-[#EAEAEA]   ">
            <tr>
              <th scope="col" class=" py-6">
                #
              </th>
              <th scope="col" class="px-12 py-6">
                Ad-Soyad
              </th>
              <th scope="col" class="px-12 py-6">
                E-mail
              </th>
              <th scope="col" class="px-12 py-6">
                Telefon
              </th>
              <th scope="col" class="px-12 py-6">
                Durum
              </th>
              <th scope="col" class="px-12 py-6">
                İşlem
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map(user =>(
               <tr class="bg-white border-b" key={user.id} >
               <td class="px-12 py-4">{user.id} </td>
               <td class="px-12 py-4 flex flex-row items-center ">
               <img
                   class="w-8 h-8 rounded-full "
                   src="https://i.pravatar.cc/300"
                   alt="Default avatar"
                 />
                 <span className="pr-12 ml-6" >{user.name} </span>
               </td>
               <td class="px-12 py-4">{user.email} </td>
               <td class="px-12 py-4">{user.phone}</td>
               <td class="px-12 py-4">
                 
                     {user.status === "Aktif" ? <span className="bg-[#6FCF9733] px-2 py-1 rounded-full text-[#27AE60] font-semibold ">{user.status} </span> 
                     : ""}

                      {user.status === "Yasaklandı" ? <span className="bg-[#E417611A] px-2 py-1 rounded-full text-[#E41761] font-semibold ">{user.status} </span> : ""  }
                      {user.status === "Kısıtlandı" ? <span className="bg-[#E74C1433] px-2 py-1 rounded-full text-[#EB5757] font-semibold ">{user.status} </span> : ""  }
                 
               </td>
               <td class="flex items-center px-12 py-4 space-x-3">
               <Link to={`/users/${user.id}/edit`}>
                   <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M2.99878 17.4614V20.5014C2.99878 20.7814 3.21878 21.0014 3.49878 21.0014H6.53878C6.66878 21.0014 6.79878 20.9514 6.88878 20.8514L17.8088 9.9414L14.0588 6.1914L3.14878 17.1014C3.04878 17.2014 2.99878 17.3214 2.99878 17.4614ZM20.7088 7.0414C21.0988 6.6514 21.0988 6.0214 20.7088 5.6314L18.3688 3.2914C17.9788 2.9014 17.3488 2.9014 16.9588 3.2914L15.1288 5.1214L18.8788 8.8714L20.7088 7.0414Z"
                       fill="#B8BFCC"
                     />
                   </svg>
                 </Link>
                 <button onClick={() => handleDelete(user.id)} >
                   <svg
                     width="22"
                     height="24"
                     viewBox="0 0 22 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       fill-rule="evenodd"
                       clip-rule="evenodd"
                       d="M3.03157 4.22376C5.26921 3.99778 7.50711 3.88477 9.74518 3.88477C13.5019 3.88477 17.269 4.07597 21.0129 4.44699C21.473 4.49258 21.809 4.90255 21.7634 5.36268C21.7178 5.8228 21.3079 6.15884 20.8477 6.11324C17.1572 5.74751 13.4452 5.55918 9.74518 5.55918C7.56319 5.55918 5.38104 5.66938 3.19862 5.88983L3.19617 5.89007L0.918958 6.11333C0.458786 6.15844 0.0491702 5.82197 0.00405539 5.3618C-0.0410595 4.90163 0.295411 4.49201 0.755583 4.4469L3.03034 4.22389C3.03075 4.22385 3.03116 4.22381 3.03157 4.22376Z"
                       fill="#B8BFCC"
                     />
                     <path
                       fill-rule="evenodd"
                       clip-rule="evenodd"
                       d="M8.04798 2.82932C8.04798 2.82935 8.04798 2.82937 8.04797 2.8294L7.80245 4.29134C7.72588 4.74733 7.29414 5.05491 6.83815 4.97833C6.38216 4.90175 6.07458 4.47002 6.15116 4.01402L6.39681 2.55131C6.4011 2.52584 6.40545 2.49956 6.40992 2.47254C6.48678 2.0083 6.59955 1.32724 7.05353 0.812429C7.58272 0.212346 8.39012 0.00012207 9.42146 0.00012207H12.3461C13.39 0.00012207 14.1966 0.229405 14.7226 0.835597C15.1772 1.35948 15.2872 2.04297 15.3606 2.49937C15.3642 2.52158 15.3676 2.54326 15.3711 2.56436C15.3712 2.56517 15.3713 2.56598 15.3715 2.5668L15.6162 4.01299C15.6934 4.46888 15.3864 4.901 14.9305 4.97815C14.4746 5.05531 14.0424 4.74827 13.9653 4.29238L13.7197 2.84121C13.7194 2.83956 13.7192 2.8379 13.7189 2.83624C13.6255 2.26357 13.5664 2.058 13.458 1.93302C13.398 1.86386 13.1887 1.67454 12.3461 1.67454H9.42146C8.56628 1.67454 8.36345 1.8586 8.30938 1.91991C8.20656 2.03651 8.14859 2.23203 8.04804 2.82901C8.04802 2.82912 8.048 2.82922 8.04798 2.82932Z"
                       fill="#B8BFCC"
                     />
                     <path
                       fill-rule="evenodd"
                       clip-rule="evenodd"
                       d="M3.18334 7.97211C3.64475 7.94232 4.04295 8.29223 4.07273 8.75365L4.79801 19.99C4.79806 19.9907 4.79811 19.9915 4.79817 19.9923C4.82967 20.4418 4.85634 20.7984 4.91892 21.1092C4.97988 21.4119 5.0645 21.6107 5.17378 21.7529C5.36224 21.9983 5.82766 22.3257 7.30052 22.3257H14.467C15.9399 22.3257 16.4053 21.9983 16.5937 21.7529C16.703 21.6107 16.7877 21.4119 16.8486 21.1092C16.9112 20.7984 16.9379 20.4418 16.9694 19.9923C16.9694 19.9915 16.9695 19.9907 16.9695 19.99L17.6948 8.75365C17.7246 8.29223 18.1228 7.94232 18.5842 7.97211C19.0456 8.00189 19.3955 8.40009 19.3657 8.8615L18.6402 20.1024C18.6401 20.104 18.64 20.1055 18.6398 20.107L18.6384 20.1282C18.609 20.5482 18.5766 21.0101 18.4901 21.4398C18.4003 21.8854 18.2422 22.3556 17.9217 22.7729C17.2506 23.6466 16.1086 24.0001 14.467 24.0001H7.30052C5.65896 24.0001 4.51694 23.6466 3.84586 22.7729C3.52537 22.3556 3.36721 21.8854 3.27746 21.4398C3.19092 21.0101 3.15858 20.5482 3.12917 20.1282L3.12768 20.107C3.12758 20.1055 3.12747 20.104 3.12737 20.1024L2.40179 8.8615C2.37201 8.40009 2.72192 8.00189 3.18334 7.97211Z"
                       fill="#B8BFCC"
                     />
                     <path
                       fill-rule="evenodd"
                       clip-rule="evenodd"
                       d="M8.18237 17.0234C8.18237 16.561 8.5572 16.1862 9.01958 16.1862H12.7368C13.1992 16.1862 13.574 16.561 13.574 17.0234C13.574 17.4857 13.1992 17.8606 12.7368 17.8606H9.01958C8.5572 17.8606 8.18237 17.4857 8.18237 17.0234Z"
                       fill="#B8BFCC"
                     />
                     <path
                       fill-rule="evenodd"
                       clip-rule="evenodd"
                       d="M7.2558 12.5582C7.2558 12.0958 7.63063 11.721 8.09301 11.721H13.6744C14.1368 11.721 14.5116 12.0958 14.5116 12.5582C14.5116 13.0206 14.1368 13.3954 13.6744 13.3954H8.09301C7.63063 13.3954 7.2558 13.0206 7.2558 12.5582Z"
                       fill="#B8BFCC"
                     />
                   </svg>
                 </button>
               </td>
             </tr>
            )) }
            
          </tbody>
        </table>
      </div>
    </div>
   
  );
};

export default Table;
