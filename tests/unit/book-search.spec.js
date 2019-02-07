import { expect, assert } from "chai";
import { shallowMount } from "@vue/test-utils";
import BookSearch from "@/components/BookSearch.vue";
import DisplayResults from "@/components/DisplayResults.vue";
import mockdata from "../json/data.json";

describe("BookSearch.vue", () => {
  it("renders a vue instance", () => {
    expect(shallowMount(BookSearch).isVueInstance()).to.equal(true);
  });
});

describe("DisplayResults.vue", () => {
  it("renders a vue instance", () => {
    expect(shallowMount(DisplayResults).isVueInstance()).to.equal(true);
  });

  it("accepts a json object as data", () => {
    const itemList = mockdata.items;
    const wrapper = shallowMount(DisplayResults, {
      propsData: { itemList }
    });
    assert.equal(wrapper.vm.itemList, itemList);
  });
});
