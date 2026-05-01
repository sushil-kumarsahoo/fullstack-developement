import { createClient } from "redis";

const client = createClient();

async function processSubmission(submission: string) {
    const { problemId, code, language } = JSON.parse(submission);

    console.log(`Processing submission for problemId ${problemId}`);
    console.log(`Code : ${code}`);
    console.log(`Language : ${language}`);

    //here add your actual processing logic

    //Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Finished processing submission for problemId ${problemId}`);
}


async function startWorker() {
    try {
        await client.connect();
        console.log('Worker connected to redis.');

        while (true) {
            try {
                const submissions = await client.brPop("submissions", 0);
                console.log(submissions);
                
                if (!submissions) continue;
                await processSubmission(submissions.element);
            } catch (error) {
                console.error("Error processing submission", error);
                //implement your error handling logic here

            }
        }

    } catch (error) {
        console.error("Failed to connect to redis", error);

    }
}

startWorker()

