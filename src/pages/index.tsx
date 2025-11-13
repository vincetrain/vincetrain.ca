import TerminalCommand from '@/components/terminalcommand/terminalcommand';
import Layout from '@/layouts/layout';

export default function Page() {
    return (
        <Layout>
            <div className=''>
                <TerminalCommand command='this is a test of the typing feature in the "command prompt" component' commandDelay={2} output='vincent' outputDelay={1} cps={35} />
            </div>
        </Layout>
    );
}