const config = {
    local: {
        DB: {
            host: "localhost",
            portno: 27017,
            dbname: "sanjay",


        },
        PORTNO: 7625,
    },
    staging: {
        DB: {
            HOST: "172.10.1.3",
            PORT: 27017,
            DATABASE: "sanjayvishwakarma",
            MANGOOSE: {
                useUnifiedTopology: true,
                useNewUrlParser: true,


            },

            USERNAME: "sanjayvishwakarma",
            PASSWORD: "sanjayvishwakarma675",
        }, PORTNO: 7624,


    },

}
export const get = function get(env) {
    return config[env];
}