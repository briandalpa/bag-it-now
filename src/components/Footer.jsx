export default function Footer({ items }) {
  if (items.length === 0)
    return <footer className="stats">cart lookin’ mad dry rn 🛒💀</footer>;

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      {totalItems} on da list, {checkedItems} secured ({percentage}%)
    </footer>
  );
}
