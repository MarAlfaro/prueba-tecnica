import mongoose from 'mongoose';

// Función para conectar a la base de datos MongoDB.
const connectDB = async () => {
  try {
    // Intenta conectarse a la base de datos utilizando la URI especificada en las variables de entorno.
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('MongoDB connected');  
  } catch (error) {
    // Captura y maneja cualquier error de conexión.
    console.error('MongoDB connection failed:', (error as Error).message);
    // Termina el proceso en caso de error crítico.
    process.exit(1);  
  }
};

export default connectDB;
