import React from 'react'


export default function KnowledgePage(){
   const [users,setUsers] = useState([])
   const [loading,setLoading] = useState(true)


const getData = ()=>{
    axios.get("https://dummyapi.com")
    .then((res)=>{
          setUsers(res.data)
          setLoading(false)
    })
    .catch((err)=>{
      console.log("Error featching data ", err);
      setLoading(false);
    })
}

useEffect(()=>{
    getData()
},[])



      return(
        <>
         

        
        </>
      )
}







// import React, { useState } from 'react'

// const cardsData = [
//   { id: 1, title: "Card 1", desc: "This is card one" },
//   { id: 2, title: "Card 2", desc: "This is card two" },
//   { id: 3, title: "Card 3", desc: "This is card three" },
//   { id: 4, title: "Card 4", desc: "This is card four" },
//   { id: 5, title: "Card 5", desc: "This is card five" },
//   { id: 6, title: "Card 6", desc: "This is card six" },
//   { id: 7, title: "Card 7", desc: "This is card seven" },
//   { id: 8, title: "Card 8", desc: "This is card eight" },
// ];

// export default function CategoriesProducts() {
//   const [currentPage, setCurrentPage] = useState(1)
//   const cardsPerPage = 4 

//   const LastProduct = currentPage * cardsPerPage;
//   const FirstProduct = LastProduct - cardsPerPage;
//   const showProduct = cardsData.slice(FirstProduct, LastProduct);

//   const Pages = Math.ceil(cardsData.length / cardsPerPage);

//   return (
//     <div className='container mt-4'>
//       <div className='row'>
//         {showProduct.map((item) => (
//           <div className="col-md-3 mb-3" key={item.id}>
//             <div className='card h-100 shadow-sm'>
//               <div className="card-body text-center">
//                 <h5 className="card-title">{item.title}</h5>
//                 <p className="card-text">{item.desc}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <nav className="d-flex justify-content-center mt-4">
//         <ul className="pagination">
//           <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
//             <button className="page-link" onClick={() => setCurrentPage(p => p - 1)}>
//               Prev
//             </button>
//           </li>

//           {[...Array(Pages)].map((_, index) => (
//             <li
//               key={index}
//               className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
//             >
//               <button
//                 className="page-link"
//                 onClick={() => setCurrentPage(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             </li>
//           ))}

//           <li className={`page-item ${currentPage === Pages ? "disabled" : ""}`}>
//             <button className="page-link" onClick={() => setCurrentPage(p => p + 1)}>
//               Next
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }
