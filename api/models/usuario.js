var bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    login: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    senha: DataTypes.STRING,
    nome: DataTypes.STRING
  }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  });
  Usuario.beforeSave((usuario, options) => {
    if (usuario.changed('senha')) {
      usuario.senha = bcrypt.hashSync(usuario.senha, bcrypt.genSaltSync(10), null);
    }
  });
  // Usuario.beforeCreate((usuario, options) => {
  //   if (usuario.changed('senha')) {
  //     usuario.senha = bcrypt.hashSync(usuario.senha, bcrypt.genSaltSync(10), null);

  //   }
  // });
  Usuario.associate = function (models) {
    // associations can be defined here
  };
  return Usuario;
};