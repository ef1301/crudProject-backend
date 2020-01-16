import { STRING, INTEGER } from 'sequelize';
import { define } from '../db';

const Player = define("player", {

    firstName: {
        type: STRING,
        allowNull: false
    },

    lastName: {
        type: STRING,
        allowNull: false
    },

    jerseyNumber: {
        type: INTEGER,
        allowNull: false
    }

});

export default Player;