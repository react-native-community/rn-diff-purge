const core = require('@actions/core');
const github = require('@actions/github');

const repositoryData = {
    owner: 'react-native-community',
    repo: 'rn-diff-purge',
};

const releasesFileName = 'multiple-releases-diff.sh'; // 'RELEASES';

(async () => {
    const client = new github.GitHub(
        core.getInput('github-token', { required: true })
    );

    await Promise.all(
        github.context.payload.commits.map(async ({ id: commitRef }) => {
            const {
                data: { files },
            } = await client.repos.getCommit({
                ...repositoryData,
                ref: commitRef,
            });

            const [releaseFile] = files.filter(
                ({ filename }) => filename === releasesFileName
            );

            if (!releaseFile) {
                core.debug(`No release file changed on commit ${commitRef}, moving on`);

                return;
            }

            core.debug(
                `Release file changed on commit ${commitRef}, sending notification`
            );

            await client.repos.createDispatchEvent({
                ...repositoryData,
                repo: 'upgrade-support',
                event_type: 'NEW_RELEASE',
            });
        })
    );
})();
