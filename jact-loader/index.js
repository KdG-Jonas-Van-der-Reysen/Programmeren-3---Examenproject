import jactParser from 'jact-parser';

export default function loader(input) {
    const js = jactParser.default(input);
    return js;
}
