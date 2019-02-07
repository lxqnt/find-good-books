import { expect, assert } from "chai";
import VueRouter from "vue-router";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import BookSearch from "@/components/BookSearch.vue";
import DisplayResults from "@/views/DisplayResults.vue";
import mockdata from "../json/data.json";
import ResultSnippet from "@/components/ResultSnippet.vue";

describe("BookSearch.vue", () => {
  it("renders a vue instance", () => {
    expect(shallowMount(BookSearch).isVueInstance()).to.equal(true);
  });
});

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("DisplayResults.vue", () => {
  it("renders a vue instance", () => {
    expect(shallowMount(DisplayResults).isVueInstance()).to.equal(true);
  });

  it("accepts an array of book data", () => {
    const itemList = mockdata.items;
    const wrapper = shallowMount(DisplayResults, {
      localVue,
      propsData: { itemList }
    });
    assert.equal(wrapper.vm.itemList, itemList);
  });
});

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
