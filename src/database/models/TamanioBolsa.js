module.exports = (sequelize, DataTypes) => {
    let alias = "TamanioBolsa";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true, 
            allowNull: false,
        },
        size:{
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName : "bag_sizes",
        timestamps : false
    }
    const TamanioBolsa = sequelize.define(alias, cols, config);
    
    TamanioBolsa.associate = function (models){
        TamanioBolsa.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "idSize"
        });
    }

    return TamanioBolsa;
} 