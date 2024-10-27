import Option from "./Option";


const PriceOption = () => {
const priceOption =    [
        {
          "id": 1,
          "name": "Basic",
          "price": 30,
          "features": [
            "Access to gym equipment",
            "Locker access",
            "One free personal training session per month",
            "Free Wi-Fi",
            "Access during off-peak hours",
            "Basic fitness tracking",
            "Access to online workout library"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 50,
          "features": [
            "Access to gym equipment",
            "Locker access",
            "Free group classes",
            "Two personal training sessions per month",
            "Access to sauna and steam room",
            "Free Wi-Fi",
            "Access during peak hours",
            "Advanced fitness tracking",
            "Access to online workout library",
            "Nutrition plan and guidance"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 80,
          "features": [
            "24/7 gym access",
            "Access to gym equipment",
            "Priority locker access",
            "Unlimited group classes",
            "Weekly personal training session",
            "Access to sauna and steam room",
            "Free Wi-Fi",
            "Access to guest passes (up to 3 per month)",
            "Body composition analysis",
            "Customized workout plans",
            "Access to premium equipment (e.g., HIIT, TRX, boxing)",
            "Discount on fitness supplements and apparel",
            "Access to online wellness workshops"
          ]
        },
        {
          "id": 4,
          "name": "Elite",
          "price": 120,
          "features": [
            "24/7 gym access",
            "Access to premium gym equipment",
            "Private locker",
            "Unlimited group classes",
            "Unlimited personal training sessions",
            "Access to exclusive wellness programs",
            "Access to sauna, steam room, and hot tub",
            "Complimentary fitness assessment",
            "Free Wi-Fi",
            "Priority booking for group classes",
            "Access to guest passes (up to 5 per month)",
            "Nutrition and meal planning services",
            "Access to online and in-person wellness workshops",
            "Complimentary massage therapy (1 per month)",
            "25% discount on fitness supplements and apparel",
            "Priority support and concierge service",
            "Monthly progress tracking and assessment"
          ]
        }
      ]
      
    return (
        <div>
            <h1 className="mt-5 text-5xl font-bold text-center">Best Prices in the town</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           {
                priceOption.map(option => <Option key={option.id} option={option}></Option>)
            }
           </div>
        </div>
    );
};

export default PriceOption;