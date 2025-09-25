// "use client";

// import { useState } from "react";
// import styles from "./login-admin.module.scss";

// interface AdminUser {
//   firstName: string;
//   lastName: string;
// }

// interface AdminLoginProps {
//   onLogin: (user: AdminUser) => void;
// }

// export default function AdminLogin({ onLogin }: AdminLoginProps) {
//   const [firstName, setFirstName] = useState<string>("");
//   const [lastName, setLastName] = useState<string>("");
//   const [key, setKey] = useState<string>("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (key === "admin123") {
//       // вызываем проп onLogin с данными администратора
//       onLogin({ firstName, lastName });
//     } else {
//       alert("Неверный ключ доступа!");
//     }
//   };

//   return (
//     <div className={styles.adminLogin}>
//       <form className={styles.loginForm} onSubmit={handleSubmit}>
//         <h2 className={styles.title}>Вход администратора</h2>

//         <div className={styles.formGroup}>
//           <label htmlFor="firstName">Имя</label>
//           <input
//             id="firstName"
//             type="text"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             placeholder="Введите имя"
//             required
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="lastName">Фамилия</label>
//           <input
//             id="lastName"
//             type="text"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             placeholder="Введите фамилию"
//             required
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="key">Ключ доступа</label>
//           <input
//             id="key"
//             type="password"
//             value={key}
//             onChange={(e) => setKey(e.target.value)}
//             placeholder="Введите ключ"
//             required
//           />
//         </div>

//         <button type="submit" className={styles.submitBtn}>
//           Войти
//         </button>
//       </form>
//     </div>
//   );
// }
