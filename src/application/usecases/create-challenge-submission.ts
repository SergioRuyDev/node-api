import {Submission} from "../../domain/entities/submission";

type CreateChallengeSubmissionRequest = {
    userId: string;
    challengeId: string
}

class CreateChallengeSubmission {
    execute({ userId, challengeId }: CreateChallengeSubmissionRequest) {
        const submission = Submission.create({
            studentId,
            challengeId,
        })

        return submission
    }
}
