import CommandPrompt from '@/components/commandprompt/commandprompt';
import Layout from '@/layouts/layout';

export default function Page() {
    return (
        <Layout>
            <div className=''>
                <CommandPrompt command='whoami' output='vincent' enterDelay={0.2} cps={35} />
            </div>
        </Layout>
    );
}