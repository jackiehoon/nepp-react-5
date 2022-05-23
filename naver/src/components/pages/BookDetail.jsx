import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../../apis";

const BookDetail = () => {
  const [book, setBook] = useState({});
  const params = useParams();
  console.log(params.isbn);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    const result = await getBookDetail({ d_isbn: params.isbn });
    setBook(result.items[0]);
  };

  return (
    <>
      <img src={book.image} />
      <h2>{book.title}</h2>
    </>
  );
};

export default BookDetail;
