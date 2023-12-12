export class Posit {
    uuid: string;
    title: string;
    content: string;
    authorUuid: string;

    constructor(uuid: string, title: string, content: string, authorUuid: string) {
        this.uuid = uuid;
        this.title = title;
        this.content = content;
        this.authorUuid = authorUuid;
    }
}