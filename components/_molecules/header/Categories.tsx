export default function Categories() {
  const categories = [
    { title: 'Women', value: 'Women' },
    { title: 'Male', value: 'Male' },
    { title: 'Mother-Child', value: 'Mother-Child' },
    { title: 'Home & Furniture', value: 'Home & Furniture' },
    { title: 'Super market', value: 'Super market' },
    { title: 'Cosmetics', value: 'Cosmetics' },
    { title: 'Shoe & Bag', value: 'Shoe & Bag' },
    { title: 'Electronic', value: 'Electronic' },
    { title: 'Best seller', value: 'Best seller' },
  ];

  return (
    <div className='w-full mt-[45px] flex justify-between'>
      {categories.map((item) => (
        <span
          key={item.value}
          className='lato font-medium text-[14px] text-[#555555] hover:text-[#FF7A00] transition'
        >
          {item.title}
        </span>
      ))}
    </div>
  );
}
