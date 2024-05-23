try {
    updateUserData(user);
} catch (error) {
    if (error instanceof DatabaseError) {
        console.log("Erro de banco de dados:", error.message);
        throw error; // Relança a exeção caso necessário
    } else {
        console.log("Erro inesperado: ", error);
        throw error;
    }
}