import React, { useState } from "react";
import "./User_list.css"; // Assuming you have styles for the user list

function UserList(props) {
  const users = [
    { name: 'Huasacca Smith', imageUrl: 'src/img/Usuario.png' },
    { name: 'Pinillos Shalon', imageUrl: 'src/img/Usuario.png' },
    { name: 'Benja Mhee-ko Gerrikho', imageUrl: 'src/img/Usuario.png' },
    { name: 'Carmen Miranda MeLa Rima', imageUrl: 'src/img/Usuario.png' },
    { name: 'Lola Buenas Lolas', imageUrl: 'src/img/Usuario.png' },
    { name: 'Boris Mexicano Escalante', imageUrl: 'src/img/Usuario.png' },
    { name: 'Yamir Blabberwocky', imageUrl: 'src/img/Usuario.png' },
  ];

  const categories = [
    { name: 'Programación' }, 
    { name: 'Tecnología' },
    { name: 'Angela White' },
    { name: 'Superación personal' },
    { name: 'Deportes' },
    { name: 'Karely Ruiz' },
    { name: 'Política' },
    { name: 'Economía' },
    { name: 'Música' },
    { name: 'Alex Marín' },

  ];

  const [numberOfCategoriesToShow, setNumberOfCategoriesToShow] = useState(4);
  const [isShowingAllCategories, setIsShowingAllCategories] = useState(false);

  const handleToggleCategoriesClick = () => {
    const newNumberOfCategoriesToShow = isShowingAllCategories ? 4 : categories.length;
    setIsShowingAllCategories(!isShowingAllCategories);
    setNumberOfCategoriesToShow(newNumberOfCategoriesToShow);
  };

  const [numberOfUsersToShow, setNumberOfUsersToShow] = useState(3);
  const [isShowingAllUsers, setIsShowingAllUsers] = useState(false);

  const handleToggleUsersClick = () => {
    const newNumberOfUsersToShow = isShowingAllUsers ? 3 : users.length;
    setIsShowingAllUsers(!isShowingAllUsers);
    setNumberOfUsersToShow(newNumberOfUsersToShow);
  };

  return (
    <div className="padre_3">
      <section className="users">
        <h2>Usuarios</h2>
        <ul>
          {users.slice(0, numberOfUsersToShow).map((user) => (
            <li key={user.name}>
              <img
                src={user.imageUrl}
                alt={user.name}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/64x64";
                }}
              />
              <span className="name">{user.name}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleToggleUsersClick}
          className={isShowingAllUsers ? "show-less" : "view-more"}
        >
          {isShowingAllUsers ? "Mostrar menos" : "Ver más usuarios"}
        </button>
      </section>

      <div className="categories-container pizarra">
        <section className="categories">
          <h2>Categorías</h2>
          <div className="category-list">
            {categories.slice(0, numberOfCategoriesToShow).map((category) => (
              <div key={category.name} className="category-item">
                <span className="category-name">{category.name}</span>
              </div>
            ))}
          </div>
          <button
            onClick={handleToggleCategoriesClick}
            className="category-button"
          >
            {isShowingAllCategories ? "Mostrar menos" : "Mostrar más"}
          </button>
        </section>
      </div>
    </div>
  );
}

export default UserList;