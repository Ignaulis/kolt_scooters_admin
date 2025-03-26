export const generateRegistrationCode = () => Math.random().toString(36).substring(2, 38).toUpperCase();

export const getScooters = () => {
    const data = localStorage.getItem('scooters');
    return data ? JSON.parse(data) : [];
};

export const saveScooters = (scooters) => {
    localStorage.setItem('scooters', JSON.stringify(scooters));
};
