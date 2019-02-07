import { expect, assert } from "chai";
import VueRouter from "vue-router";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import BookSearch from "@/components/BookSearch.vue";
import DisplayResults from "@/components/DisplayResults.vue";
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
    const bookInfo = mockdata.items[0].volumeInfo;
    const wrapper = shallowMount(ResultSnippet, {
      propsData: {
        volumeInfo: bookInfo
      }
    });
    expect(wrapper.text()).to.include(bookInfo.title);
  });
});
