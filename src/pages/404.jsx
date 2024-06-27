import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/popular");
    }, 5000);
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div >
      <h1>404 - Сторінка не знайдена</h1>
      <p>
        Ви будете автоматично перенаправлені на головну сторінку через 5
        секунди.
      </p>
    </div>
  );
};

export default NotFound;