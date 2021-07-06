const db = require ('./connection');
const { Student, Tutor } = require('../models');

db.once('open', async () => {

    await Student.deleteMany();

    await Student.create({
        name: 'Stu Dehnt',
        email: 'fakestudent@email.com',
        password: 'HeccinPassword',
        grade: '6',
        about: 'I\'m a student looking for a teacher to teach math subjects such as multiplication and division.'
    });

    await Student.create(
        {
            name: 'Sir Ramik Varze',
            email: 'nofreetime@university.edu',
            password: 'FreakinPassword',
            grade: 'Undergrad',
            about: 'I am searching for anybody to help me in Geography and History-based courses.'
        });

    await Student.create(
        {
            name: 'Claire Annette',
            email: 'reedsarebad@email.com',
            password: 'BlackDiamond',
            grade: '10',
            about: 'Hello! I am a high school student looking for someone to help me learn clarinet. I have been playing for 6 years and am looking to audtion for youth symphony next year!'
            });

    await Tutor.deleteMany();

    await Tutor.create(
        {
            name: 'Alonne Caem Zeus',
            email: 'Alonne.Zeus@greekgods.com',
            password: 'ThunderBoltHurled',
            subject: 'History',
            rate: '$50 per hour',
            about: ' I can teach anyone in one-on-one or in group tutoring sessions about ancient Greece, and their culture. Contact me for more information.'
    });

    await Tutor.create(
        {
            name: 'Sir Tanley',
            email: 'stanley@puns.com',
            password: 'Laughs4all',
            subject: 'Theater',
            rate: '$40 per hour',
            about: 'Need someone to help guide you with line delivery or light coreography? I can help you there, as you advance toward stardom! Younger students may also do half-hour sessions for $20.'
    });

    await Tutor.create(
    {
        name: 'Montgomery Montgomery',
        email: 'MontergomeryM26@doubledouble.com',
        password: 'SnicketyLemon',
        subject: 'Biology',
        rate: '$50 per hour',
        about: 'I can help you with any of your animal biology-based, specifically in the reptile department. Please bring PPE to sessions if you want to attend live sessions.'
    });
});
