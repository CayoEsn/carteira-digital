module.exports = (sequelize, DataTypes) => {
  const Saldo = sequelize.define('Saldo', {
    login: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    saldo: DataTypes.FLOAT
  }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  });
  // Saldo.beforeSave((usuario, options) => {
  //   if (usuario.changed('senha')) {
  //     usuario.senha = bcrypt.hashSync(usuario.senha, bcrypt.genSaltSync(10), null);
  //   }
  // });
  // Saldo.prototype.comparePassword = function (passw, cb) {
  //   bcrypt.compare(passw, this.senha, function (err, isMatch) {
  //     if (err) {
  //       return cb(err);
  //     }
  //     cb(null, isMatch);
  //   });
  // };
  Saldo.associate = function (models) {
    // associations can be defined here
  };
  return Saldo;
};