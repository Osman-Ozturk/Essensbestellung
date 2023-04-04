import { useState } from 'react';
import Title from '../ui/Title.jsx';
import CustomerItem from './CustomerItem.jsx';
import { Pagination } from 'antd';

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);

  function handlePagination(page) {
    setCurrentPage(page);
  }

  const comments = [
    { id: 1, userName: 'Osman Öztürk', kommentar: 'sdfgdsghfdhjgfkjhgkj dfgfdgdfgdfg' },
    { id: 2, userName: 'Seyma Öztürk', kommentar: 'sdfgdsghfdhjgfkjhgkj dfgfdgdfgdfg' },
    { id: 3, userName: 'Numan Öztürk', kommentar: 'sdfgdsghfdhjgfkjhgkj dfgfdgdfgdfg' },
    { id: 4, userName: 'Duman Öztürk', kommentar: 'sdfgdsghfdhjgfkjhgkj dfgfdgdfgdfg' },
    { id: 5, userName: 'Bekir Öztürk', kommentar: 'sdfgdsghfdhjgfkjhgkj dfgfdgdfgdfg' },
    { id: 6, userName: 'Ekrem Öztürk', kommentar: 'sdfgdsghfdhjgfkjhgkj dfgfdgdfgdfg' },
  ];

  const startIndex = (currentPage - 1) * 2;
  const endIndex = startIndex + 2;
  const visibleComments = comments.slice(startIndex, endIndex);

  return (
    <div className='container m-auto'>
      <Title addClass={'text-[40px] text-secondary text-center'}>
        Was unsere Kunden sagen
      </Title>
      <div className='grid grid-cols-2 gap-10 mb-5'>
        {visibleComments.map((comment) => (
          <CustomerItem
            key={comment.id}
            userName={comment.userName}
            kommentar={comment.kommentar}
          />
        ))}
      </div>
      <Pagination
      className='flex justify-center items-center'
        defaultCurrent={1}
        current={currentPage}
        total={comments.length}
        pageSize={2}
        onChange={handlePagination}
      />
    </div>
  );
};

export default Customers;
