module.exports = (sequelize, DataTypes) => {
  const Movimentacao = sequelize.define('Movimentacao', {
    // login: {
    //   type: DataTypes.STRING,
    //   primaryKey: true,
    // },
    // senha: DataTypes.STRING,
    // nome: DataTypes.STRING,
    id_transacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    data: DataTypes.DATE,
    login_origem: {
      type: DataTypes.STRING,
      allowNull: false
    },
    login_destino: {
      type: DataTypes.STRING,
      allowNull: false
    },
    valor_transferido: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  });
  Movimentacao.associate = function (models) {
    // associations can be defined here
  };
  return Movimentacao;
};