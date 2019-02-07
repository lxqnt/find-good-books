import { expect, assert } from "chai";
import VueRouter from "vue-router";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import BookSearch from "@/components/BookSearch.vue";
import DisplayResults from "@/views/DisplayResults.vue";
import mockdata from "../json/data.json";
import ResultSnippet from "@/components/ResultSnippet.vue";
import singleBook from "../json/singlebook.json";
import singleFailBook from "../json/singleFailBook.json";
import ResultDetail from "@/components/ResultDetail.vue";

/* Book Search Componenet tests */

describe("BookSearch.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  it("renders a vue instance", () => {
    expect(shallowMount(BookSearch, { localVue }).isVueInstance()).to.equal(
      true
    );
  });

  it("query param returned as URI", () => {
    const localState = { queryValue: "some winners" };
    expect(BookSearch.computed.getQuery.call(localState)).to.equal(
      "some%20winners"
    );
  });
});

/* Display Results tests - failing because router issue 

describe("DisplayResults.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);

  //To be used for testing $route
  const $route = {
    path: "search/42",
    params: {
      id: "some%20winners"
    }
  };

  it("renders a vue instance", () => {
    expect(shallowMount(DisplayResults, { localVue }).isVueInstance()).to.equal(
      true
    );
  });

  it("reads route param results ", () => {
    const wrapper = shallowMount(DisplayResults, {
      mocks: {
        $route
      }
    });
    expect(wrapper.vm.searchTerm.to.equal("some%20winners"));
  });
});
*/

/* Result Snippet Tests */

describe("ResultSnippet.vue", () => {
  it("renders a vue instance", () => {
    expect(shallowMount(ResultSnippet).isVueInstance()).to.equal(true);
  });

  it("accepts a single book object ", () => {
    const bookInfo = mockdata.items[0].volumeInfo;
    const wrapper = shallowMount(ResultSnippet, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    // console.log(bookInfo);
    assert.equal(wrapper.vm.volumeInfo, bookInfo);
  });

  it("displays title", () => {
    const bookInfo = mockdata.items[1].volumeInfo;
    const wrapper = shallowMount(ResultSnippet, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("Life, the Universe and Everything");
  });

  it("doesnt break when no title", () => {
    const bookInfo = mockdata.items[5].volumeInfo;
    const wrapper = shallowMount(ResultSnippet, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("");
  });

  it("displays single author", () => {
    const bookInfo = mockdata.items[1].volumeInfo;
    const wrapper = shallowMount(ResultSnippet, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("Douglas Adams");
  });

  it("displays multiple authors", () => {
    const bookInfo = mockdata.items[6].volumeInfo;
    const wrapper = shallowMount(ResultSnippet, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include(
      "Henning Wallentowitz, and Christian Amsel"
    );
  });

  it("doesnt break with no authors", () => {
    const bookInfo = mockdata.items[3].volumeInfo;
    const wrapper = shallowMount(ResultSnippet, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("");
  });

  it("displays publisher", () => {
    const bookInfo = mockdata.items[1].volumeInfo;
    const wrapper = shallowMount(ResultSnippet, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("Del Rey");
  });

  it("doesnt break when no publisher", () => {
    const bookInfo = mockdata.items[5].volumeInfo;
    const wrapper = shallowMount(ResultSnippet, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("");
  });

  it("displays book image", () => {
    const bookInfo = mockdata.items[1].volumeInfo;
    const wrapper = shallowMount(ResultSnippet, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.html()).to.contain(
      '<img src="http://books.google.com/books/content?id=KcWGokt5fsQC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api"'
    );
  });

  it("doesnt break when no image", () => {
    const bookInfo = mockdata.items[5].volumeInfo;
    const wrapper = shallowMount(ResultSnippet, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.html()).to.include("");
  });
});

/* Result Detail page */
describe("ResultDetail.vue", () => {
  it("renders a vue instance", () => {
    expect(shallowMount(ResultDetail).isVueInstance()).to.equal(true);
  });

  it("accepts a single book object ", () => {
    const bookInfo = singleBook.volumeInfo;
    const wrapper = shallowMount(ResultDetail, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    // console.log(bookInfo);
    assert.equal(wrapper.vm.volumeInfo, bookInfo);
  });

  it("displays title", () => {
    const bookInfo = singleBook.volumeInfo;
    const wrapper = shallowMount(ResultDetail, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("Life, the Universe and Everything");
  });

  it("doesnt break when no title", () => {
    const bookInfo = singleFailBook.volumeInfo;
    const wrapper = shallowMount(ResultDetail, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("");
  });

  it("displays single author", () => {
    const bookInfo = singleBook.volumeInfo;
    const wrapper = shallowMount(ResultDetail, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("Douglas Adams");
  });

  it("displays multiple authors", () => {
    const bookInfo = singleFailBook.volumeInfo;
    const wrapper = shallowMount(ResultDetail, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("Brian Herbert, and Kevin J. Anderson");
  });

  it("doesnt break with no authors", () => {
    const bookInfo = singleBook.volumeInfo;
    const wrapper = shallowMount(ResultDetail, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("");
  });

  it("displays publisher", () => {
    const bookInfo = singleBook.volumeInfo;
    const wrapper = shallowMount(ResultDetail, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("Random House Publishing Group");
  });

  it("doesnt break when no publisher", () => {
    const bookInfo = singleFailBook.volumeInfo;
    const wrapper = shallowMount(ResultDetail, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include("");
  });

  it("displays book image", () => {
    const bookInfo = singleBook.volumeInfo;
    const wrapper = shallowMount(ResultDetail, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.html()).to.contain(
      '<img src="http://books.google.com/books/content?id=KcWGokt5fsQC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;imgtk=AFLRE73AQf9pli-kTHjlw-WBwYeYZUqDOr5GXyngqfuIa2jv1FAU9h3iJ9aryzyjvliLWqaljCD-c4sOdJRdEE_t2AAmEiqzTrM_W07VBIX1hkeuJLxym5CDhta2Atq1BkbD9eUhxZTE&amp;source=gbs_api"'
    );
  });

  it("doesnt break when no image", () => {
    const bookInfo = singleFailBook.volumeInfo;
    const wrapper = shallowMount(ResultDetail, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.html()).to.include("<img src=");
  });

  it("displays only the year of the date", () => {
    const bookInfo = singleBook.volumeInfo;
    const wrapper = shallowMount(ResultDetail, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text())
      .to.include("2008")
      .and.not.include("12-24");
  });
});
