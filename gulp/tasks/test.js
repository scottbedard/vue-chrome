import { Server } from "karma";

export default function(done) {
    const serverConfig = {
        configFile: __dirname + '/../config/karma.conf.js',
        singleRun: true,
    };

    new Server(serverConfig, () => done()).start();
};
