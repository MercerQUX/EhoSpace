import {create} from "react-test-renderer";
import Post from "./Post";

describe("Post",()=>{
    test("status from props",()=>{
        const component = create(<Post text="testing text"/>);
        const root = component.root;
        let p = root.findByType("p");
        expect(p.children[0]).toBe("testing text")
    })
    test("status in edit mode",()=>{
        const component = create(<Post text="testing text"/>);
        const root = component.root;
        let p = root.findByType("p");
        expect(p.children[0]).toBe("testing text")
    })
})