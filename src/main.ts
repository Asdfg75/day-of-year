import './style.css';

const getDayNumber = () => {
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const firstDayOfYear = new Date(2023, 0, 1);

    const dayNumber = (today.getTime() - firstDayOfYear.getTime()) / millisecondsInDay + 1;

    return (dayNumber + 0.5) | 0;
};

const getNumberSuffix = (n: number) => {
    let suffix = 'th';

    if (n < 10 || n > 20) {
        const mod = n % 10;

        switch (mod) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
        }
    }

    return suffix;
};

const dayNumber = getDayNumber();
const suffix = getNumberSuffix(dayNumber);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <h1>It is the ${dayNumber}${suffix} day of the year.</h1>
    </div>
`;
