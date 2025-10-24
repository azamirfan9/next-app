const { DataTypes } = require('sequelize');
    const sequelize = require('../../config/db'); // Your database connection

    const Schedule = sequelize.define('schedule', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      meeting_id: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.STRING,
      },
      start_time: {
        type: DataTypes.STRING,
      },
      end_time: {
        type: DataTypes.STRING,
      },
      passcode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      host_type: {
        type: DataTypes.INTEGER,
      },
      participants: {
        type: DataTypes.INTEGER,
      },
    });

    module.exports = Schedule;