const DeliveryDetails = ({ deliveries }) => {
  return (
    <div className="delivery-details">
      <h2 className="text-2xl poppins pb-4 border-b border-gray-500 text-gray-700">Delivery Details</h2>
      {deliveries.map((delivery, index) => (
        <div key={index} className="delivery-item">
          <p><strong>Deliver Place:</strong> {delivery.deliverPlace}</p>
          <p><strong>Arriving In:</strong> {delivery.arrivingIn}</p>
          <p><strong>Road:</strong> {delivery.road}</p>
          <p><strong>Floor:</strong> {delivery.floor}</p>
          <p><strong>Deliver To:</strong> {delivery.deliverTo}</p>
        </div>
      ))}
    </div>
  );
};

export default DeliveryDetails;
