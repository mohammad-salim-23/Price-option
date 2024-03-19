import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes (limited)"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes",
                "Access to sauna and steam room",
                "Personal training session (1/month)"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes",
                "Access to sauna and steam room",
                "Unlimited personal training sessions",
                "Access to swimming pool",
                "Access to spa facilities",
                "Nutrition consultation (monthly)"
            ]
        }
    ]
    
    return (
        <div>
            <h2 className="text-5xl">Best prices in the town</h2>
            {
priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;