const seats = [
    {
        "seatNumber": "1A",
        "price": "£19.99",
        "available": true,
        "disabilityAccessible": true
    },
    {
        "seatNumber": "2A",
        "price": "£19.99",
        "available": false,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "3A",
        "price": "£19.99",
        "available": false,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "4A",
        "price": "£19.99",
        "available": true,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "5A",
        "price": "£19.99",
        "available": false,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "1B",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": true
    },
    {
        "seatNumber": "2B",
        "price": "£12.99",
        "available": false,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "3B",
        "price": "£12.99",
        "available": false,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "4B",
        "price": "£12.99",
        "available": false,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "5B",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "1C",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": true
    },
    {
        "seatNumber": "2C",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "3C",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "4C",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "5C",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "1D",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": true
    },
    {
        "seatNumber": "2D",
        "price": "£12.99",
        "available": false,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "3D",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "4D",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "5D",
        "price": "£12.99",
        "available": true,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "1E",
        "price": "£8.99",
        "available": true,
        "disabilityAccessible": true
    },
    {
        "seatNumber": "2E",
        "price": "£8.99",
        "available": true,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "3E",
        "price": "£8.99",
        "available": false,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "4E",
        "price": "£8.99",
        "available": true,
        "disabilityAccessible": false
    },
    {
        "seatNumber": "5E",
        "price": "£8.99",
        "available": true,
        "disabilityAccessible": false
    },
]

export const seatData = seats.map((item) => {
    const [seatRowPosition, seatRow] = item.seatNumber.match(/\D+|[\d]+/g);
    return {
        ...item,
        seatRow,
        seatRowPosition: parseInt(seatRowPosition, 10),
        value: +parseFloat(item.price.replace(/[^\d.]/g, '')).toFixed(2)
    }
})

export const seatLayoutModel = seatData.reduce(function (r, a, i) {
    r[a.seatRow] = r[a.seatRow] || [];
    r[a.seatRow].push(a);
    return r;
}, Object.create(null))
