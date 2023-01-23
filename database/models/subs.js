module.exports = (sequelize , Datatypes) => {
              const subscribers = sequelize.define("subscribers", {
                id: {
                  type: Datatypes.INTEGER,
                  primaryKey: true,
                  auto_Increment: true,
                },
                email: {
                  type: Datatypes.TEXT,
                  allowNull: false,
                  unique: true,
                  validate: {
                    isLowercase: true,
                  },
                },
              });
              return subscribers;
}