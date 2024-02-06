"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const user = [
      {
        name: "Rahmat Adlin Pasaribu",
        image:
          "https://static.vecteezy.com/system/resources/previews/029/156/453/original/admin-business-icon-businessman-business-people-male-avatar-profile-pictures-man-in-suit-for-your-web-site-design-logo-app-ui-solid-style-illustration-design-on-white-background-eps-10-vector.jpg",
        email: "rahmat@mail.com",
        summary:
          "As a graduate in Industrial Engineering with a background in Occupational Health and Safety (OHS), I have navigated a unique career path. The decision to pivot in my career emerged after successfully completing the Hacktiv8 Bootcamp, where I immersed myself in honing skills as a software and website developer. This shift has been a pivotal moment in my life, transitioning from the manufacturing industry to the dynamic realm of technology. It allowed me to pursue my true passion for software development and web applications. Starting my coding journey with a fervor, I focused particularly on web development and mobile applications. This decision not only reflects my dedication to technology but also showcases my determination to acquire new skills and embrace a future full of innovation.",
        workingExperience: "PT Agricon Indonesia (May 2023 - June 2023)",
        techSkills: "NodeJS, ReactJS, Rest API, Redis, MongoDB, PostgreSQL",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Users", user, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
