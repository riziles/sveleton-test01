import { c as create_ssr_component, f as subscribe, g as createEventDispatcher, e as escape, b as add_attribute, v as validate_component, m as missing_component } from "../../chunks/index2.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../chunks/index.js";
function modalService() {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Append to end of queue. */
    trigger: (modal) => update((mStore) => {
      mStore.push(modal);
      return mStore;
    }),
    /**  Remove first item in queue. */
    close: () => update((mStore) => {
      if (mStore.length > 0)
        mStore.shift();
      return mStore;
    }),
    /** Remove all items from queue. */
    clear: () => set([])
  };
}
const modalStore = modalService();
const cBackdrop = "fixed top-0 left-0 right-0 bottom-0 z-[999] flex justify-center items-center p-4";
const cModal = "max-h-full overflow-y-auto overflow-x-hidden";
const cModalImage = "w-full h-auto";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBackdrop;
  let classesModal;
  let parent;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  createEventDispatcher();
  let { duration = 150 } = $$props;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { width = "w-full max-w-[640px]" } = $$props;
  let { height = "h-auto" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { buttonNeutral = "btn-ghost-surface" } = $$props;
  let { buttonPositive = "btn-filled-primary" } = $$props;
  let { buttonTextCancel = "Cancel" } = $$props;
  let { buttonTextConfirm = "Confirm" } = $$props;
  let { buttonTextSubmit = "Submit" } = $$props;
  let { regionBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { regionHeader = "text-2xl font-bold" } = $$props;
  let { regionBody = "max-h-[200px] overflow-hidden" } = $$props;
  let { regionFooter = "flex justify-end space-x-2" } = $$props;
  let promptValue;
  const buttonTextDefaults = {
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit
  };
  modalStore.subscribe((dArr) => {
    if (!dArr.length)
      return;
    promptValue = dArr[0].value;
    buttonTextCancel = dArr[0].buttonTextCancel || buttonTextDefaults.buttonTextCancel;
    buttonTextConfirm = dArr[0].buttonTextConfirm || buttonTextDefaults.buttonTextConfirm;
    buttonTextSubmit = dArr[0].buttonTextSubmit || buttonTextDefaults.buttonTextSubmit;
  });
  function onClose() {
    if ($modalStore[0].response)
      $modalStore[0].response(false);
    modalStore.close();
  }
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.buttonNeutral === void 0 && $$bindings.buttonNeutral && buttonNeutral !== void 0)
    $$bindings.buttonNeutral(buttonNeutral);
  if ($$props.buttonPositive === void 0 && $$bindings.buttonPositive && buttonPositive !== void 0)
    $$bindings.buttonPositive(buttonPositive);
  if ($$props.buttonTextCancel === void 0 && $$bindings.buttonTextCancel && buttonTextCancel !== void 0)
    $$bindings.buttonTextCancel(buttonTextCancel);
  if ($$props.buttonTextConfirm === void 0 && $$bindings.buttonTextConfirm && buttonTextConfirm !== void 0)
    $$bindings.buttonTextConfirm(buttonTextConfirm);
  if ($$props.buttonTextSubmit === void 0 && $$bindings.buttonTextSubmit && buttonTextSubmit !== void 0)
    $$bindings.buttonTextSubmit(buttonTextSubmit);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
    $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionBody === void 0 && $$bindings.regionBody && regionBody !== void 0)
    $$bindings.regionBody(regionBody);
  if ($$props.regionFooter === void 0 && $$bindings.regionFooter && regionFooter !== void 0)
    $$bindings.regionFooter(regionFooter);
  classesBackdrop = `${cBackdrop} ${regionBackdrop} ${$$props.class || ""}`;
  classesModal = `${cModal} ${background} ${width} ${height} ${padding} ${spacing} ${rounded} ${shadow}`;
  parent = {
    background,
    width,
    height,
    padding,
    spacing,
    rounded,
    shadow,
    // ---
    buttonNeutral,
    buttonPositive,
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit,
    // ---
    regionBackdrop,
    regionHeader,
    regionBody,
    regionFooter,
    // ---
    onClose
  };
  $$unsubscribe_modalStore();
  return `

${$modalStore.length > 0 ? `
		<div class="${"modal-backdrop " + escape(classesBackdrop, true) + " " + escape($modalStore[0].backdropClasses, true)}" data-testid="${"modal-backdrop"}">
			<div class="${"modal " + escape(classesModal, true) + " " + escape($modalStore[0].modalClasses, true)}" data-testid="${"modal"}" role="${"dialog"}" aria-modal="${"true"}"${add_attribute("aria-label", $modalStore[0].title, 0)}>
				${$modalStore[0]?.title ? `<header class="${"modal-header " + escape(regionHeader, true)}"><!-- HTML_TAG_START -->${$modalStore[0].title}<!-- HTML_TAG_END --></header>` : ``}
				
				${$modalStore[0]?.body ? `<article class="${"modal-body " + escape(regionBody, true)}"><!-- HTML_TAG_START -->${$modalStore[0].body}<!-- HTML_TAG_END --></article>` : ``}
				
				${$modalStore[0]?.image && typeof $modalStore[0]?.image === "string" ? `<img class="${"modal-image " + escape(cModalImage, true)}"${add_attribute("src", $modalStore[0]?.image, 0)} alt="${"Modal"}">` : ``}
				
				${$modalStore[0].type === "alert" ? `
					<footer class="${"modal-footer " + escape(regionFooter, true)}">
						<button class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button></footer>` : `${$modalStore[0].type === "confirm" ? `
					
					<footer class="${"modal-footer " + escape(regionFooter, true)}"><button class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button>
					<button class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextConfirm)}</button></footer>` : `${$modalStore[0].type === "prompt" ? `
					<input class="${"modal-prompt-input"}" type="${"text"}"${add_attribute("value", promptValue, 0)}>
					
					<footer class="${"modal-footer " + escape(regionFooter, true)}"><button class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button>
					<button class="${"btn " + escape(buttonPositive, true)}" ${!promptValue ? "disabled" : ""}>${escape(buttonTextSubmit)}</button></footer>` : `${$modalStore[0].type === "component" ? `
					
					${validate_component($modalStore[0].component?.ref || missing_component, "svelte:component").$$render($$result, Object.assign({}, $modalStore[0].component?.props, { parent }), {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${$modalStore[0].component?.slot}<!-- HTML_TAG_END -->`;
    }
  })}` : ``}`}`}`}</div></div>` : ``}`;
});
const Flowchart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"100%"}" height="${"100%"}" viewBox="${"0.00 0.00 559 698.89"}"><g id="${"graph0"}" class="${"graph"}" transform="${"translate(4,694.8900146484375) scale(1)"}" data-name="${"G"}"><g id="${"clust10"}" class="${"cluster"}" data-name="${"cluster_0"}"><path fill="${"none"}" stroke="${"#81819c"}" d="${"M20,-8C20,-8 246,-8 246,-8 252,-8 258,-14 258,-20 258,-20 258,-670.89 258,-670.89 258,-676.89 252,-682.89 246,-682.89 246,-682.89 20,-682.89 20,-682.89 14,-682.89 8,-676.89 8,-670.89 8,-670.89 8,-20 8,-20 8,-14 14,-8 20,-8"}"></path></g><g id="${"clust11"}" class="${"cluster"}" data-name="${"cluster_1"}"><path fill="${"none"}" stroke="${"#858597"}" d="${"M345,-8C345,-8 531,-8 531,-8 537,-8 543,-14 543,-20 543,-20 543,-670.89 543,-670.89 543,-676.89 537,-682.89 531,-682.89 531,-682.89 345,-682.89 345,-682.89 339,-682.89 333,-676.89 333,-670.89 333,-670.89 333,-20 333,-20 333,-14 339,-8 345,-8"}"></path></g><g id="${"node1"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"alabel"}"><path fill="${"#4a4a4a"}" stroke="${"#4a4a4a"}" d="${"M236.36,-674.89C236.36,-674.89 31.64,-674.89 31.64,-674.89 25.64,-674.89 19.64,-668.89 19.64,-662.89 19.64,-662.89 19.64,-650.89 19.64,-650.89 19.64,-644.89 25.64,-638.89 31.64,-638.89 31.64,-638.89 236.36,-638.89 236.36,-638.89 242.36,-638.89 248.36,-644.89 248.36,-650.89 248.36,-650.89 248.36,-662.89 248.36,-662.89 248.36,-668.89 242.36,-674.89 236.36,-674.89"}"></path><text text-anchor="${"middle"}" x="${"134"}" y="${"-650.89"}" font-family="${"Arial"}" font-size="${"20.00"}" fill="${"white"}">Buddha&#39;s Eightfold Path</text></g><g id="${"node3"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"a0"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"134"}" cy="${"-581.96"}" rx="${"94.13"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"134"}" y="${"-576.56"}" font-family="${"Arial"}" font-size="${"18.00"}">Samyak Drusti</text></g><g id="${"node2"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"blabel"}"><path fill="${"#4a4a4a"}" stroke="${"#4a4a4a"}" d="${"M523.49,-674.89C523.49,-674.89 352.51,-674.89 352.51,-674.89 346.51,-674.89 340.51,-668.89 340.51,-662.89 340.51,-662.89 340.51,-650.89 340.51,-650.89 340.51,-644.89 346.51,-638.89 352.51,-638.89 352.51,-638.89 523.49,-638.89 523.49,-638.89 529.49,-638.89 535.49,-644.89 535.49,-650.89 535.49,-650.89 535.49,-662.89 535.49,-662.89 535.49,-668.89 529.49,-674.89 523.49,-674.89"}"></path><text text-anchor="${"middle"}" x="${"438"}" y="${"-650.89"}" font-family="${"Arial"}" font-size="${"20.00"}" fill="${"white"}">Eight Limbs of Yoga</text></g><g id="${"node4"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"b0"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"392"}" cy="${"-581.96"}" rx="${"50.85"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"392"}" y="${"-576.56"}" font-family="${"Arial"}" font-size="${"18.00"}">Yamas</text></g><g id="${"node5"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"a1"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"133"}" cy="${"-504.09"}" rx="${"117.35"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"133"}" y="${"-498.69"}" font-family="${"Arial"}" font-size="${"18.00"}">Samyak Samkalpa</text></g><g id="${"node6"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"b1"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"443"}" cy="${"-504.09"}" rx="${"60.64"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"443"}" y="${"-498.69"}" font-family="${"Arial"}" font-size="${"18.00"}">Niyamas</text></g><g id="${"edge1"}" class="${"edge"}" data-name="${"a0--b1"}"><path fill="${"none"}" stroke="${"#5d5fb8"}" stroke-dasharray="${"5,2"}" d="${"M195.79,-565.79C254.26,-551.43 340.85,-530.17 394.5,-517"}"></path></g><g id="${"edge2"}" class="${"edge"}" data-name="${"a1--b1"}"><path fill="${"none"}" stroke="${"#5d5fb8"}" stroke-dasharray="${"5,2"}" d="${"M250.76,-504.09C294.57,-504.09 338.37,-504.09 382.18,-504.09"}"></path></g><g id="${"node7"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"a2"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"133"}" cy="${"-426.23"}" rx="${"82.52"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"133"}" y="${"-420.83"}" font-family="${"Arial"}" font-size="${"18.00"}">Samyak Vac</text></g><g id="${"node8"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"b2"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"443"}" cy="${"-426.23"}" rx="${"47.31"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"443"}" y="${"-420.83"}" font-family="${"Arial"}" font-size="${"18.00"}">Asana</text></g><g id="${"edge3"}" class="${"edge"}" data-name="${"a2--b0"}"><path fill="${"none"}" stroke="${"#5d5fb8"}" stroke-dasharray="${"5,2"}" d="${"M165.34,-445.68C216.17,-476.24 313.98,-535.04 362.79,-564.39"}"></path></g><g id="${"node9"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"a3"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"133"}" cy="${"-348.37"}" rx="${"116.02"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"133"}" y="${"-342.97"}" font-family="${"Arial"}" font-size="${"18.00"}">Samyak Karmanta</text></g><g id="${"node10"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"b3"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"457"}" cy="${"-348.37"}" rx="${"76.3"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"457"}" y="${"-342.97"}" font-family="${"Arial"}" font-size="${"18.00"}">Pranayama</text></g><g id="${"edge4"}" class="${"edge"}" data-name="${"a3--b0"}"><path fill="${"none"}" stroke="${"#5d5fb8"}" stroke-dasharray="${"5,2"}" d="${"M155.97,-369.09C205.7,-413.93 322.72,-519.48 370.8,-562.84"}"></path></g><g id="${"node11"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"a4"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"136"}" cy="${"-270.51"}" rx="${"88.33"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"136"}" y="${"-265.11"}" font-family="${"Arial"}" font-size="${"18.00"}">Samyak Ajiva</text></g><g id="${"node12"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"b4"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"457"}" cy="${"-270.51"}" rx="${"73.65"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"457"}" y="${"-265.11"}" font-family="${"Arial"}" font-size="${"18.00"}">Pratyahara</text></g><g id="${"edge5"}" class="${"edge"}" data-name="${"a4--b0"}"><path fill="${"none"}" stroke="${"#5d5fb8"}" stroke-dasharray="${"5,2"}" d="${"M152.93,-291.11C199.59,-347.87 329.58,-506.02 375.6,-562"}"></path></g><g id="${"node13"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"a5"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"136"}" cy="${"-192.65"}" rx="${"113.77"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"136"}" y="${"-187.25"}" font-family="${"Arial"}" font-size="${"18.00"}">Samyak Vyayama</text></g><g id="${"node14"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"b5"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"475"}" cy="${"-192.65"}" rx="${"60.27"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"475"}" y="${"-187.25"}" font-family="${"Arial"}" font-size="${"18.00"}">Dharana</text></g><g id="${"edge7"}" class="${"edge"}" data-name="${"a5--b1"}"><path fill="${"none"}" stroke="${"#5d5fb8"}" stroke-dasharray="${"5,2"}" d="${"M156.31,-213.25C212.25,-270.01 368.14,-428.15 423.33,-484.14"}"></path></g><g id="${"node15"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"a6"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"148"}" cy="${"-114.79"}" rx="${"93.2"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"148"}" y="${"-109.39"}" font-family="${"Arial"}" font-size="${"18.00"}">Samyak Smriti</text></g><g id="${"node16"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"b6"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"477"}" cy="${"-114.79"}" rx="${"55.37"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"477"}" y="${"-109.39"}" font-family="${"Arial"}" font-size="${"18.00"}">Dhyana</text></g><g id="${"edge8"}" class="${"edge"}" data-name="${"a6--b2"}"><path fill="${"none"}" stroke="${"#5d5fb8"}" stroke-dasharray="${"5,2"}" d="${"M167.6,-135.48C221.58,-192.48 371.95,-351.22 424.55,-406.75"}"></path></g><g id="${"edge9"}" class="${"edge"}" data-name="${"a6--b3"}"><path fill="${"none"}" stroke="${"#5d5fb8"}" stroke-dasharray="${"5,2"}" d="${"M174.72,-134.99C233.29,-179.27 372.42,-284.44 430.65,-328.46"}"></path></g><g id="${"node17"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"a7"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"139"}" cy="${"-36.93"}" rx="${"111.12"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"139"}" y="${"-31.53"}" font-family="${"Arial"}" font-size="${"18.00"}">Samyak Samadhi</text></g><g id="${"node18"}" class="${"node"}" pointer-events="${"visible"}" data-name="${"b7"}"><ellipse fill="${"#bdbdbd"}" stroke="${"#bdbdbd"}" cx="${"438"}" cy="${"-36.93"}" rx="${"61.6"}" ry="${"20.86"}"></ellipse><text text-anchor="${"middle"}" x="${"438"}" y="${"-31.53"}" font-family="${"Arial"}" font-size="${"18.00"}">Samadhi</text></g><g id="${"edge11"}" class="${"edge"}" data-name="${"a7--b4"}"><path fill="${"none"}" stroke="${"#5d5fb8"}" stroke-dasharray="${"5,2"}" d="${"M167.01,-57.51C227.68,-102.07 370.57,-207.02 430.16,-250.8"}"></path></g><g id="${"edge12"}" class="${"edge"}" data-name="${"a7--b5"}"><path fill="${"none"}" stroke="${"#5d5fb8"}" stroke-dasharray="${"5,2"}" d="${"M181.33,-56.55C247.83,-87.37 375.64,-146.6 438.4,-175.69"}"></path></g><g id="${"edge10"}" class="${"edge"}" data-name="${"a7--b6"}"><path fill="${"none"}" stroke="${"#5d5fb8"}" stroke-dasharray="${"5,2"}" d="${"M208.77,-53.59C274.96,-68.45 372.59,-90.36 430,-103.24"}"></path></g><g id="${"edge6"}" class="${"edge"}" data-name="${"a7--b7"}"><path fill="${"none"}" stroke="${"#5d5fb8"}" stroke-dasharray="${"5,2"}" d="${"M250.54,-36.93C292.4,-36.93 334.26,-36.93 376.12,-36.93"}"></path></g></g></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(Modal, "Modal").$$render($$result, {}, {}, {})}


<div class="${"container h-full mx-auto flex justify-center items-center"}"><div class="${"space-y-10 text-center h-full"}">
		<figure class="${"h-full"}"><section class="${"img-bg"}"></section>
			${validate_component(Flowchart, "Flowchart").$$render($$result, {}, {}, {})}</figure></div>


	<style lang="${"postcss"}">figure {
			position: relative;
			display: flex;
			flex-direction: column;
}
		figure img,
		.img-bg {
			height: 100%;
			width: 100%;
			opacity: 0.6;
}
		@media (min-width: 768px) {
			figure img,
		.img-bg {
						height: 100%;
			}
}
		.img-bg {
			background-image: linear-gradient(to right, var(--tw-gradient-stops));
			--tw-gradient-from: rgb(var(--color-primary-300) / 1);
			--tw-gradient-to: rgb(var(--color-primary-300) / 0);
			--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
			--tw-gradient-to: rgb(var(--color-warning-300) / 1);
			position: absolute;
			z-index: -1;
			border-radius: 9999px;
			--tw-blur: blur(64px);
			filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
			animation: pulse 30s cubic-bezier(0, 0, 0, 0.5) infinite;
}
		@keyframes pulse {
			50% {
				transform: scale(0.01);
			}
		}

		.node {
			cursor: pointer;
}</style></div>`;
});
export {
  Page as default
};
