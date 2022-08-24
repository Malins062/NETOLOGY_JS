import ErrorRepository from './errorrespository';

/* eslint-disable */

const errors = new ErrorRepository();
errors.set(100, 'Code - 100: Missign file extension.');
errors.set(101, 'Code - 101: Missign file name.');
console.log(errors.keys);

/* eslint-enable */
