let Typeofpackage = 'express';
switch (Typeofpackage) {
    case 'standard':
        console.log('might take 3 to 5 days');
        break;
    case 'express':
        console.log('might take 1 to 2 days');
        break;
    case 'overnight':
        console.log('delivered in next day');
        break;

    default:
        console.log('invalid type of package');
        break;
}
