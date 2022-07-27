export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "ownername",
      headerName: "Owner Name",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "restaurantname",
      headerName: "Restaurant Name",
      width: 150,
    },
  
    {
      field: "phone",
      headerName: "phone",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "address",
      headerName: "Address",
      width: 100,
    },
   
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {

      id: 1,
      ownername: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      restaurantname: 'sajidaINN',
      status: "active",
      email: "1snow@gmail.com",
      address: 'Karachi',
      phone: '0317647564',
     
    },
    {
      id: 2,
      ownername: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      phone: '0317647564',
      restaurantname: 'sajidaINN',
      status: "active",
      email: "1snow@gmail.com",
      address: 'Karachi',
    },
    {
        id: 3,
        ownername: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        restaurantname: 'sajidaINN',
        status: "active",
        email: "1snow@gmail.com",
        address: 'Karachi',
        phone: '0317647564',
    },
    {
        id: 4,
        ownername: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        restaurantname: 'sajidaINN',
        status: "active",
        email: "1snow@gmail.com",
        address: 'Karachi',
        phone: '0317647564',
    },
    {
        id: 5,
        ownername: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        restaurantname: 'sajidaINN',
        status: "active",
        email: "1snow@gmail.com",
        address: 'Karachi',
        phone: '0317647564',
    },
    {
        id: 6,
        ownername: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        restaurantname: 'sajidaINN',
        status: "active",
        email: "1snow@gmail.com",
        address: 'Karachi',
        phone: '0317647564',
    },
    {
        id: 8,
        ownername: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        restaurantname: 'sajidaINN',
        status: "active",
        email: "1snow@gmail.com",
        address: 'Karachi',
        phone: '0317647564',
    },
    {
        id: 9,
        ownername: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        restaurantname: 'sajidaINN',
        status: "active",
        email: "1snow@gmail.com",
        address: 'Karachi',
        phone: '0317647564',
    },
    {
        id: 10,
        ownername: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        restaurantname: 'sajidaINN',
        status: "active",
        email: "1snow@gmail.com",
        address: 'Karachi',
        phone: '0317647564',
    },
    
  ];